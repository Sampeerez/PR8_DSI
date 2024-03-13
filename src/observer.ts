import { Event } from './event.js';

/**
 * The Observer interface represents an observer in the Observer design pattern.
 * 
 * @template T The type of the data associated with the events that the observer can handle.
 */
export interface Observer<T> {
  /**
   * Handles an update from the observable that this observer is subscribed to.
   * 
   * @param event The event that the observer should handle.
   */
  update(event: Event<T>): void;
}