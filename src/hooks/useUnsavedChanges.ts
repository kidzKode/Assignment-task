import { useEffect } from 'react';

const useUnsavedChanges = (unsavedChanges: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        const message = 'You have unsaved changes. Are you sure you want to leave?';
        event.returnValue = message; // Legacy way to show confirmation dialog
        return message; // Modern way to show confirmation dialog
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);
};

export default useUnsavedChanges;
