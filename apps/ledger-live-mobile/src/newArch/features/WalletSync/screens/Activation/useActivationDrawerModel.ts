import { useCallback, useMemo, useState } from "react";
import { Steps } from "../../types/Activation";
import {
  AnalyticsButton,
  AnalyticsPage,
  useLedgerSyncAnalytics,
} from "../../hooks/useLedgerSyncAnalytics";
import { useQRCodeHost } from "../../hooks/useQRCodeHost";
import { Options } from "LLM/features/WalletSync/types/Activation";

type Props = {
  isOpen: boolean;
  startingStep: Steps;
  handleClose: () => void;
};

const useActivationDrawerModel = ({ isOpen, startingStep, handleClose }: Props) => {
  const { onClickTrack } = useLedgerSyncAnalytics();
  const [currentStep, setCurrentStep] = useState<Steps>(startingStep);
  const [currentOption, setCurrentOption] = useState<Options>(Options.SCAN);

  const hasCustomHeader = useMemo(() => currentStep === Steps.QrCodeMethod, [currentStep]);
  const canGoBack = useMemo(
    () => currentStep === Steps.ChooseSyncMethod && startingStep === Steps.Activation,
    [currentStep, startingStep],
  );

  const getPreviousStep = useCallback(
    (step: Steps): Steps => {
      switch (step) {
        case Steps.ChooseSyncMethod:
          return Steps.Activation;
        case Steps.QrCodeMethod:
          return Steps.ChooseSyncMethod;
        default:
          return startingStep;
      }
    },
    [startingStep],
  );

  const navigateToChooseSyncMethod = () => setCurrentStep(Steps.ChooseSyncMethod);

  const navigateToQrCodeMethod = () => {
    onClickTrack({
      button: AnalyticsButton.ScanQRCode,
      page: AnalyticsPage.ChooseSyncMethod,
    });
    setCurrentStep(Steps.QrCodeMethod);
  };

  const onQrCodeScanned = () => setCurrentStep(Steps.PinInput);

  const resetStep = () => setCurrentStep(startingStep);
  const resetOption = () => setCurrentOption(Options.SCAN);
  const goBackToPreviousStep = () => setCurrentStep(getPreviousStep(currentStep));

  const onCloseDrawer = () => {
    resetStep();
    resetOption();
    handleClose();
  };

  const { url, error, isLoading, pinCode } = useQRCodeHost({
    setCurrentStep,
    currentStep,
    currentOption,
  });

  return {
    isOpen,
    currentStep,
    hasCustomHeader,
    canGoBack,
    navigateToChooseSyncMethod,
    navigateToQrCodeMethod,
    onQrCodeScanned,
    onCloseDrawer,
    handleClose,
    goBackToPreviousStep,
    qrProcess: { url, error, isLoading, pinCode },
    currentOption,
    setCurrentOption,
    setCurrentStep,
  };
};

export default useActivationDrawerModel;
