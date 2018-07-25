export const URL = 'https://mod-4-backend.herokuapp.com/';
export const API_URL = `${URL}api/v1/`;

export function localToken() {
  return localStorage.getItem('token');
};

export function loggedInUserId() {
  return parseInt(localStorage.getItem('user_id'), 10);
};

export function handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
};

export const filler = {
  title: 'Here is a rhando title',
  line_1: 'What do you remember about your mother?',
  line_2: 'I never meant to come between you and him.',
  line_3: 'Why did you scream like that?',
  line_4: 'Somehow we need to persuade him to part with a million dollars.',
  line_5: 'Try focussing more on your life and less on mine!',
  char1: 'A',
  char2: 'B',
  char3: 'A',
  char4: 'B',
  char5: 'A',
  img_url: 'https://i.pinimg.com/custom_covers/200x150/401101979251643329_1349568428.jpg'
};

export function quickFiller() {
  this.setState({
    title: filler.title,
    line1: filler.line_1,
    line2: filler.line_2,
    line3: filler.line_3,
    line4: filler.line_4,
    line5: filler.line_5,
    char1: filler.char1,
    char2: filler.char2,
    char3: filler.char3,
    char4: filler.char4,
    char5: filler.char5,
    img_url: filler.img_url
  });
};