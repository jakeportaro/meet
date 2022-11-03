import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('The app has loaded', () => { });

        when('The user has yet to choose a number of events in the input box.', () => {
            AppWrapper = mount(<App />);
        });

        then('A default number of 32 events is loaded on the page.', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('The app has loaded.', async () => {
            AppWrapper = await mount(<App />);
        });

        when('User changes the number of events in the input box.', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 6 } };
            NumberOfEventsWrapper.find('.number-of-events').simulate(
              'change',
              eventObject
            );
          }
        );

        then('The event list elements shows the number of events set by the user.', () => {
            expect(AppWrapper.find('.EventList')).toHaveLength(1);
        });
    });
});