import { renderHook } from '@testing-library/react';
import { act } from '@testing-library/react';
import { useDestructiveConfirmationModal } from './useDestructiveConfirmationModal';

describe('useDestructiveConfirmationModal', () => {
  it('Starts off closed', () => {
    const { result } = renderHook(() => useDestructiveConfirmationModal());
    expect(result.current.isOpen).toBe(false);
  });

  it('Returns open when initiated', () => {
    const testFunction = jest.fn();
    const { result } = renderHook(() => useDestructiveConfirmationModal());
    expect(result.current.isOpen).toBe(false);
    expect(testFunction).not.toHaveBeenCalled();

    act(() => {
      result.current.open({ message: 'test', onConfirm: testFunction, title: 'test' });
    });

    // Second act is required to wait for setState update
    act(() => {
      result.current.onConfirm();
    });

    expect(result.current.isOpen).toBe(true);
    expect(testFunction).toHaveBeenCalled();
  });
});
