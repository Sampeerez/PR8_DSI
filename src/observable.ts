import { Observer } from './observer.js';
import { Event } from './event.js';

/**
 * The Observable interface represents an observable in the Observer design pattern.
 * 
 * @template T The type of the data associated with the events that the observable can emit.
 */
export interface Observable<T> {
  /**
   * Subscribes an observer to this observable.
   * 
   * @param observer The observer to subscribe.
   */
  subscribe(observer: Observer<T>): void;

  /**
   * Unsubscribes an observer from this observable.
   * 
   * @param observer The observer to unsubscribe.
   */
  unsubscribe(observer: Observer<T>): void;

  /**
   * Notifies all subscribed observers with an event.
   * 
   * @param event The event to notify the observers with.
   */
  notify(event: Event<T>): void;
}