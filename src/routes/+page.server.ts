import { sayHello } from '$lib/server/hello';

/** @type {import('./$types').PageLoad} */
export function load() {
	return { message: sayHello() };
}
