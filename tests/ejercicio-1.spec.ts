import 'mocha';
import { expect } from 'chai';
import { Event } from '../src/event.js';
import { ConcreteObserver } from '../src/concreteObserver.js';
import { GenericObservable } from '../src/genericObservable.js';

describe("PE exercise", () => {
  const event: Event<string> = {
    data: "Concierto en la isla de la Palma de el famoso grupo UB40",
    id: "367883",
    date: "13/03/2024",
    name: "UB40 concert",
    type: "Concierto"
  };

  describe("Event", () => {
    it("should initialize correctly the event", () => {
      expect(event.data).to.equal("Concierto en la isla de la Palma de el famoso grupo UB40");
      expect(event.id).to.equal("367883");
      expect(event.date).to.equal("13/03/2024");
      expect(event.name).to.equal("UB40 concert");
      expect(event.type).to.equal("Concierto");
    });
  });

  describe("ConcreteObserver", () => {  
    const observer = new ConcreteObserver();
  
    it("should not throw when updating", () => {
      expect(() => observer.update(event)).to.not.throw();
    });
  });

  describe("GenericObservable", () => {
    const observer = new ConcreteObserver();
    let observable: GenericObservable<string>;
  
    beforeEach(() => {
      observable = new GenericObservable<string>();
    });
  
    it("should not throw when subscribing", () => {
      expect(() => observable.subscribe(observer)).to.not.throw();
    });
  
    it("should throw when subscribing the same observer twice", () => {
      expect(() => {
        observable.subscribe(observer);
        observable.subscribe(observer);
      }).to.throw('The observer had already been subscribed');
    });
  
    it("should not throw when unsubscribing", () => {
      expect(() => {
        observable.subscribe(observer);
        observable.unsubscribe(observer);
      }).to.not.throw();
    });
  
    it("should throw when unsubscribing an observer that is not subscribed", () => {
      expect(() => observable.unsubscribe(observer)).to.throw('The observer has not been subscribed');
    });
  
    it("should not throw when notifying", () => {
      expect(() => {
        observable.subscribe(observer);
        observable.notify(event);
      }).to.not.throw();
    });
  });
});