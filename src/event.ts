/**
 * The Event interface represents a generic event.
 * 
 * @template T The type of the data associated with the event.
 */
export interface Event<T> {
  /**
   * The data associated with the event.
   */
  data: T;

  /**
   * The id of the event.
   */
  id: T;

  /**
   * The date of the event.
   */
  date: T;

  /**
   * The name of the event.
   */
  name: T;

  /**
   * The type of the event.
   */
  type: T;
}