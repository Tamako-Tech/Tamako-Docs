module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'welcome',
        {
          Setup: [
            'Setup/Anischedule' ,
            'Setup/Economy' ,
            'Setup/Counter' ,
            'Setup/custom_welcome_message' ,
            'Setup/custom_leave_message' ,
            'Setup/XP_System',
            'Setup/Ticket_System',
            'Setup/proxy'
          ],
        },

      ],
    },
    'profile',
    'Commands',
    'privacy',
  ],
  api: [
    `api/chatapi`,
    `api/animalfactapi`,
    `api/jokeapi`,
    `api/lyricsapi`,
    `api/pokedexapi`,
    'privacy'
  ]
};
