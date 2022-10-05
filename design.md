## LOTR SDK design

LOTR SDK includes two main parts:
1. Controllers interacting with API throw HTTP requests made by axios library
2. Testing suits which checks that every request is made correctly. In some cases it's possible to check data (like with books). But most of test cases check just response status.
