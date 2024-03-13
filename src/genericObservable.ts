import { Event } from "./event.js";
import { Observer } from "./observer.js";
import { Observable } from "./observable.js";

/**
 * GenericObservable is a generic implementation of the Observable interface.
 * 
 * @template T The type of the data associated with the events that the observable can emit.
 */
export class GenericObservable<T> implements Observable<T> {
  /**
   * The list of observers subscribed to this observable.
   */
  private observers: Observer<T>[] = [];

  /**
   * Subscribes an observer to this observable.
   * 
   * @param observer The observer to subscribe.
   * @throws {Error} If the observer is already subscribed.
   */
  subscribe(observer: Observer<T>): void {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Unsubscribes an observer from this observable.
   * 
   * @param observer The observer to unsubscribe.
   * @throws {Error} If the observer is not subscribed.
   */
  unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Notifies all subscribed observers with an event.
   * 
   * @param event The event to notify the observers with.
   */
  notify(event: Event<T>): void {
    this.observers.forEach(observer => observer.update(event));
  }
}