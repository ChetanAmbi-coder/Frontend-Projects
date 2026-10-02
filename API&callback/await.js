//is used inside a async function to wait for a prises result//
async function test() {

    console.log("A");

    await somePromise();

    console.log("B");
}

test();

console.log("C");