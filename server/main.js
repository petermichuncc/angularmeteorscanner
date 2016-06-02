import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Parties.find().count() === 0) {
    const parties = [{
      'name': 'name1',
      'description': 'desc1'
    }, {
      'name': 'name2',
      'description': 'desc2'
    }, {
      'name': 'name3',
      'description': 'desc3'
    }];
 
    parties.forEach((party) => {
      Parties.insert(party)
    });
  }
});
