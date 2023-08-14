// RxJS v6+
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

// Example 2: Observable that emits only the json key of the response object that is being returned from the request.

const githubUsers = `https://api.github.com/users?per_page=2`;

const users = ajax.getJSON(githubUsers);

const subscribe = users.subscribe(
  (res) => console.log(res),
  (err) => console.error(err)
);
