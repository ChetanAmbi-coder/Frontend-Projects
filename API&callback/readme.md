# JavaScript API Fetch — Concepts & Mental Model

> **Purpose:** This README is my quick reference for remembering how JavaScript handles synchronous/asynchronous operations, Promises, `async/await`, Fetch API, AJAX, JSON, and the `json()` method.

---

# 1. Synchronous JavaScript

### Meaning

**Synchronous = one task at a time, in order.**

JavaScript normally executes code from **top → bottom**.

### Mental Model

```text
Task 1
  ↓
Task 2
  ↓
Task 3
  ↓
Task 4
```

JavaScript waits for the current operation to finish before moving to the next one.

### Example idea

```text
Print A
Print B
Print C

Output:
A
B
C
```

### Remember

> **Synchronous = WAIT → FINISH → NEXT**

---

# 2. Asynchronous JavaScript

Some operations take time:

* API requests
* Fetching data
* Timers
* Reading files
* Database operations
* Network requests

JavaScript should not freeze the entire program while waiting.

### Mental Model

```text
Start Task
   ↓
Long operation starts
   ↓
JavaScript continues other work
   ↓
Long operation finishes
   ↓
Result comes back
```

### Remember

> **Asynchronous = START → DON'T BLOCK → RESULT LATER**

---

# 3. Why Do We Need Asynchronous JavaScript?

Imagine an API request takes 3 seconds.

If JavaScript worked synchronously:

```text
API Request
    ↓
WAIT 3 seconds
    ↓
Continue program
```

The application could appear frozen.

With asynchronous JavaScript:

```text
API Request starts
       ↓
JavaScript continues
       ↓
Other work happens
       ↓
API response arrives
       ↓
Handle the response
```

This makes applications more responsive.

---

# 4. Promise

A **Promise** represents the future result of an asynchronous operation.

Think:

> "I don't have the result right now, but I promise to give you the result later."

A Promise has 3 states:

```text
             Promise
                │
        ┌───────┴───────┐
        ↓               ↓
    Pending          Finished
                        │
                ┌───────┴───────┐
                ↓               ↓
             Fulfilled        Rejected
             (success)         (error)
```

### States

### 1. Pending

The operation is still running.

```text
Request → waiting...
```

### 2. Fulfilled

The operation completed successfully.

```text
Request → SUCCESS → data
```

### 3. Rejected

Something went wrong.

```text
Request → ERROR
```

### Remember

> **Promise = future result**

---

# 5. `.then()` and `.catch()`

A Promise allows us to handle its future result.

### `.then()`

Used when the Promise is successful.

```text
Promise
   ↓
Success?
   ↓
.then()
```

### `.catch()`

Used when the Promise fails.

```text
Promise
   ↓
Error?
   ↓
.catch()
```

### Mental Model

```text
             Promise
                ↓
          ┌─────┴─────┐
          ↓           ↓
       Success       Error
          ↓           ↓
       .then()     .catch()
```

---

# 6. Fetch API

`fetch()` is used to make network requests, commonly to APIs.

The important concept:

> **fetch() is asynchronous and returns a Promise.**

### Overall flow

```text
fetch(API URL)
      ↓
Returns Promise
      ↓
Wait for server response
      ↓
Response object
      ↓
Convert response body
      ↓
JavaScript data
```

---

# 7. The Fetch Flow — Step by Step

When you call Fetch:

### Step 1 — Request starts

```text
JavaScript
    ↓
Fetch API
    ↓
Server
```

The browser sends a request to the API.

---

### Step 2 — Fetch returns a Promise

You don't immediately receive the API data.

Instead:

```text
fetch()
   ↓
Promise
```

The Promise represents the future response.

---

### Step 3 — Server processes the request

```text
Client
  ↓
Request
  ↓
Server
  ↓
Process
```

This may take some time.

JavaScript does **not** need to block everything while waiting.

---

### Step 4 — Server sends response

```text
Server
   ↓
HTTP Response
   ↓
Browser
```

The Promise can now become fulfilled.

---

### Step 5 — You receive a Response object

Important:

> The first result from `fetch()` is a **Response object**, not automatically the final JavaScript data.

```text
fetch()
   ↓
Response object
```

The Response contains information such as:

* status
* headers
* response body
* other HTTP response information

---

# 8. `async` and `await`

`async` and `await` are a cleaner way to work with Promises.

Instead of thinking mainly in terms of `.then()` chains, you can write asynchronous logic in a more readable, sequential-looking way.

---

# 9. `async`

When a function is marked as `async`:

> The function works with asynchronous operations and always returns a Promise.

Mental model:

```text
async function
      ↓
returns Promise
```

---

# 10. `await`

`await` means:

> "Wait for this Promise's result before continuing this async function."

Important:

`await` does **not** freeze the entire JavaScript application.

It pauses the execution of the **current async function** while JavaScript can continue other work.

### Mental Model

```text
async function
      ↓
Start Promise
      ↓
await
      ↓
Wait for Promise
      ↓
Result arrives
      ↓
Continue function
```

---

# 11. `async + await` Together

The normal mental flow is:

```text
async function
      ↓
Start asynchronous operation
      ↓
await Promise
      ↓
Promise completes
      ↓
Receive result
      ↓
Continue
```

### Remember

> **async = this function works with Promises**

> **await = wait for this Promise's result**

---

# 12. Complete Fetch + Promise + async/await Flow

This is the most important part to remember.

```text
                FETCH API
                    ↓
             Send API Request
                    ↓
              Returns Promise
                    ↓
              Waiting...
                    ↓
            Server responds
                    ↓
             Response object
                    ↓
            response.json()
                    ↓
          Returns another Promise
                    ↓
                  await
                    ↓
          JavaScript object/data
```

---

# 13. Why `response.json()`?

This is one of the most commonly forgotten concepts.

Suppose the server sends JSON data.

The response body is not automatically a normal JavaScript object.

You need to read/parse the JSON response body.

That is what:

```text
response.json()
```

is for.

### Important

`response.json()`:

> **reads the response body and parses JSON into JavaScript data.**

And importantly:

```text
response.json()
       ↓
returns a Promise
```

Therefore:

```text
await response.json()
```

gives you the parsed JavaScript data.

---

# 14. JSON

JSON means:

> **JavaScript Object Notation**

It is a common data format used for communication between:

```text
Frontend
   ↕
Backend / API
```

Example concept:

```text
JSON
 ↓
Data represented in text format
 ↓
Transferred through network
```

JSON is commonly used by REST APIs.

---

# 15. JSON vs JavaScript Object

These look similar, but conceptually they are different.

### JavaScript Object

```text
Data currently represented as a JavaScript object
```

### JSON

```text
Data represented in JSON format
```

JSON is primarily a **data interchange format**.

Think:

```text
JavaScript
   ↓
Object

Network
   ↓
JSON

JavaScript
   ↓
Parsed Object
```

---

# 16. JSON Conversion — Two Important Directions

There are two common conversions to remember.

## JSON → JavaScript

When receiving JSON from an API:

```text
JSON
 ↓
JSON.parse()
 ↓
JavaScript object/data
```

With Fetch, `response.json()` performs the reading/parsing step for the response body.

---

## JavaScript → JSON

When sending JavaScript data to a server:

```text
JavaScript object
        ↓
JSON.stringify()
        ↓
JSON
```

### Remember

```text
JSON → JavaScript
       parse

JavaScript → JSON
       stringify
```

---

# 17. What Exactly Happens During an API Fetch?

Remember this complete sequence:

```text
1. JavaScript starts
        ↓
2. fetch() is called
        ↓
3. HTTP request is sent
        ↓
4. fetch() returns a Promise
        ↓
5. JavaScript can continue other work
        ↓
6. Server sends response
        ↓
7. Promise resolves
        ↓
8. Response object is received
        ↓
9. response.json() reads the body
        ↓
10. json() returns another Promise
        ↓
11. await waits for that Promise
        ↓
12. JSON is parsed
        ↓
13. JavaScript data/object is available
        ↓
14. Use the data
```

---

# 18. AJAX

AJAX means:

> **Asynchronous JavaScript and XML**

The name is historical.

Although it says XML, modern web applications commonly exchange **JSON** instead.

AJAX is a concept/technique for making network requests from a webpage **without requiring a full page reload**.

### Old idea

```text
Page
 ↓
Request
 ↓
Server
 ↓
Entire page reload
```

### AJAX-style idea

```text
Page
 ↓
JavaScript makes request
 ↓
Server
 ↓
Data returned
 ↓
Update part of page
```

---

# 19. AJAX and Fetch

Think of the relationship like this:

```text
AJAX
 │
 ├── XMLHttpRequest (older/common traditional approach)
 │
 └── Fetch API (modern approach)
```

`fetch()` is a modern way to perform asynchronous network requests.

So:

> **AJAX is the concept/technique. Fetch is a modern API used to make those requests.**

---

# 20. The Big Picture

All the concepts connect together:

```text
              JavaScript
                   │
          ┌────────┴────────┐
          ↓                 ↓
      Synchronous       Asynchronous
                              ↓
                           Promise
                              ↓
                        async / await
                              ↓
                           fetch()
                              ↓
                        API Request
                              ↓
                         API Response
                              ↓
                       Response Object
                              ↓
                       response.json()
                              ↓
                           Promise
                              ↓
                            await
                              ↓
                       Parsed JS Data
                              ↓
                       Use in Application
```

---

# 21. Quick Memory Sheet

## Synchronous

```text
WAIT → FINISH → NEXT
```

## Asynchronous

```text
START → CONTINUE → RESULT LATER
```

## Promise

```text
FUTURE RESULT
```

## Promise states

```text
Pending → Fulfilled
        ↘ Rejected
```

## async

```text
Function → Promise
```

## await

```text
Wait for Promise result
```

## fetch

```text
API Request → Promise → Response
```

## response.json()

```text
Response Body → JSON parsing → JavaScript data
```

## JSON

```text
Common data interchange format
```

## JSON.parse()

```text
JSON → JavaScript
```

## JSON.stringify()

```text
JavaScript → JSON
```

## AJAX

```text
Asynchronous network communication
without full-page reload
```

---

# 22. The One Flow I Should Never Forget

When I forget everything, remember this:

```text
FETCH
  ↓
Promise
  ↓
Response
  ↓
response.json()
  ↓
Promise
  ↓
await
  ↓
JavaScript data
  ↓
Use the data
```

And the deeper concept:

```text
Async operation
      ↓
    Promise
      ↓
  async/await
      ↓
     Fetch
      ↓
   API response
      ↓
     JSON
      ↓
JavaScript data
```

---

# 23. Recommended Learning Order

When learning JavaScript API communication, follow this order:

```text
1. Synchronous JavaScript
        ↓
2. Asynchronous JavaScript
        ↓
3. Callback concept
        ↓
4. Promise
        ↓
5. then / catch
        ↓
6. async / await
        ↓
7. HTTP basics
        ↓
8. API concept
        ↓
9. JSON
        ↓
10. Fetch API
        ↓
11. response.json()
        ↓
12. AJAX concept
        ↓
13. GET / POST / PUT / PATCH / DELETE
        ↓
14. HTTP status codes
        ↓
15. Headers
        ↓
16. Request body
        ↓
17. Error handling
        ↓
18. API authentication
        ↓
19. REST APIs
        ↓
20. Build real API projects
```

> **Core chain to memorize:**
>
> **Asynchronous → Promise → async/await → Fetch → Response → JSON → JavaScript data**
