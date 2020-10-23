#include <string.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int bytesLength(char *name) {
    return strlen(name);
}

EMSCRIPTEN_KEEPALIVE
int daysInWeek() {
    return 7;
}

EMSCRIPTEN_KEEPALIVE
const char *welcome(char *name) {
    char *ptr = "Hello ";
    strcat(ptr, name);
    return ptr;
};
