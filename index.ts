// RxJS v6+
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

// Example 2: Observable that emits only the json key of the response object that is being returned from the request.

// const githubUsr = `https://api.github.com/users?per_page=2`;
// const usr = ajax.getJSON(githubUsr);
// const sub = usr.subscribe(
//   (res) => console.log(res),
//   (err) => console.error(err)
// );

// etim error - example 3
const githubUsers = `https://api.github.com/error`;

const users = ajax.getJSON(githubUsers);

const subscribe = users.subscribe(
  (res) => console.log(res),
  (err) => console.error(err)
);
