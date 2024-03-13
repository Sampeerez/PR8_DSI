import { Event } from "./event.js";
import { Observer } from "./observer.js";

/**
 * ConcreteObserver is a concrete implementation of the Observer interface.
 * It handles events of type string.
 */
export class ConcreteObserver implements Observer<string> {
  /**
   * Handles an update from the observable that this observer is subscribed to.
   * 
   * @param event The event that the observer should handle.
   */
  update(event: Event<string>): void {
    console.log(`Event name: ${event.name}` +
                `Event id: ${event.id}` +
                `Event data: ${event.data}` +
                `Event type: ${event.type}` +
                `Event date: ${event.date}`);
  }
}