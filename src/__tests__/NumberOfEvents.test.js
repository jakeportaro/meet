import React from "react";
import { mount, shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents.js";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render element", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render input for number of events", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events-input")).toHaveLength(
      1
    );
  });

  test("render default input for number of events of 32", () => {
    expect(
      NumberOfEventsWrapper.find(".number-of-events-input").prop("value")
    ).toBe(32);
  });
});

describe("< NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = mount(<NumberOfEvents />);
    });

    test("integration for App, NumberOfEvents, and EventList", () => {
        const NumberOfEventsState = NumberOfEventsWrapper.state({
            numberOfEvents: 32,
            errorText: "",
          })
          

    })
})