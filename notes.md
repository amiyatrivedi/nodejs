# Node JS History  :

    -  NodeJs -> 2009
    - io.js   -> 2014 : io.js is an npm compatible platform originally based on node.js.
    - Node.js Foundation ->2015 : Combination of NodeJs & io.js by Microsoft,IBM, PayPal, Gorupon , Join
          ==> V4

# Apache vs NodeJs :

    - Apache -> Every request is a single threaded. (For each request, there is ONE thread)
-            -> Thread delegates Thread to FS .
             -> Thread cannot do anything until FS finish its request.

     - Chez Node -> Only one thread.
                -> All the users share the same thread.
                 -> Thread behaves asynchrounsly.
                 -> Non blocking driven IO

# Install :

      - Download package from official site.

        or

      -  Use nvm (Node versioning management) -- see logging-sh*
____

      -  Check Node installed ?

        ```bash
          node -v
          # v6.2.1
        ```
