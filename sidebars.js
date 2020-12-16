module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'welcome',
        {
          Features: [
            'Setup/Anischedule' ,
            'Setup/Economy' ,
            'Setup/Counter' ,
            'Setup/custom_welcome_message' ,
            'Setup/custom_leave_message' ,
            'Setup/XP_System',
            'Setup/proxy'
          ],
        },

      ],
    },
        'Commands',

  ],
  api: [
    `api/chatapi`
  ]
};
