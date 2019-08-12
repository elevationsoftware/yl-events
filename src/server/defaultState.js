export const defaultState = {
    events: [{
        id: 1, name: 'International Grand Convention', start: '2019-06-16', end: '2019-06-30',
        description: 'At the 2019 International Grand Convention, we’ll celebrate being 25 years young! That’s right—we’ve been sharing the world’s purest essential oils together for 25 years! Join Young Living members from around the world as we unite for this momentous occasion. We’ll celebrate a dynamic history and look forward to an unstoppable future!'
    },
    {
        id: 3, name: 'International Grand Convention', start: '2020-06-16', end: '2020-06-30',
        description: 'At the 2019 International Grand Convention, we’ll celebrate being 25 years young! That’s right—we’ve been sharing the world’s purest essential oils together for 25 years! Join Young Living members from around the world as we unite for this momentous occasion. We’ll celebrate a dynamic history and look forward to an unstoppable future!'
    },
    {
        id: 2, name: 'Northern Lights Farm', start: '2019-02-03', end: '2019-02-08',
        description: 'Experience our Seed to Seal® quality commitment firsthand at our 2019 Northern Lights Winter Experience at the Young Living Northern Lights Farm in Ft. Nelson, British Columbia!'
    }],

    members: [
        { eventId: 3, customerId: 1323477, firstName: 'Steven', lastName: 'Tate', email: 'v-state@youngliving.com' },
        { eventId: 3, customerId: 2226559, firstName: 'James', lastName: 'Schultz', email: 'v-jschultz@youngliving.com' },
        { eventId: 3, customerId: 300475, firstName: 'Haylee', lastName: 'Heilman', email: 'v-hheilman@youngliving.com' },
        { eventId: 3, customerId: 1032345, firstName: 'Jason', lastName: 'Byers', email: 'v-jbyers@youngliving.com' },
        { eventId: 3, customerId: 1090900, firstName: 'Nick', lastName: 'Lee', email: 'v-nlee@youngliving.com' },
        { eventId: 3, customerId: 1994333, firstName: 'Jon', lastName: 'Comstock', email: 'v-jcomstock@youngliving.com' }
    ]
};