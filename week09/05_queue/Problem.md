# Queue

You have been tasked with implementing a queue data structure that will hold
onto integers given to it.

## What is a queue?

"Have you ever linked up at a bank or for food?"

The quote above does some lifting in providing a real-life scenario where one may have interacted with a queue. Within code, the analogy works as well but
we need to isolate the structures involved.

You have been given a class called `Queue` which will need the following
operations implemented:

* `enqueue(v)` - This adds `v` to the end of the queue, as if they just lined up

* `dequeue()` - Removes the first integer from the queue, if no one has lined up, it
    should return null

* `peek()` - Returns the integer at the head of the queue, it does not remove them but
    you will get an idea what the number is before removing it. null is returned if the
    queue is empty.

* `size()` - Returns the number of integers currently in the queue.


You will also have a few constraints to adhere by, since some collections and data structures
are already available from JS standard library, you will need to implement this assuming
you do not have access to these types.

* You aren't allowed any other data-structure such as JS's built-in Array type or other data structures that would trivialise the problem.

* It must implement the methods above

## How to test

You are able to test your implementation using `npm test`. Assuming you have implemented
the queue correctly, you should pass all the test cases.

