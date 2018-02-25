#! /bin/bash -e -x

#     [ repl-port | web-port | cljs-build ]
clj -C:$1 -R:$1 -m nearby.repl 6661 8080 $1