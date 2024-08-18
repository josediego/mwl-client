interface Success<T> {
  success: true;
  value: T
}

interface Failure<T> {
  success: false;
  error: T;
}

export const Failure = <T>(error: T): Failure<T> => ({ success: false, error });
export const Success = <T>(value: T): Success<T> => ({ success: true, value })