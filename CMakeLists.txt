cmake_minimum_required(VERSION 3.17)
project(@moduleName@ C)

set(CMAKE_C_STANDARD 11)

set(emscripten_dir "~/github/emscripten-core/emsdk")

include_directories("${emscripten_dir}/upstream/emscripten/system/include")

add_executable(@moduleName@_es library.c)
set_target_properties(@moduleName@_es PROPERTIES LINK_FLAGS "-o @moduleName@_es.js -s EXPORT_ES6=1 -s MODULARIZE=1 -s EXPORTED_RUNTIME_METHODS=['ccall','cwrap']")

add_executable(@moduleName@_node library.c)
set_target_properties(@moduleName@_node PROPERTIES LINK_FLAGS "-o @moduleName@_node.js -s MODULARIZE -s EXPORTED_RUNTIME_METHODS=['ccall','cwrap']")

add_custom_command(TARGET @moduleName@_es
        POST_BUILD
        COMMAND deno run --unstable -A ${CMAKE_CURRENT_SOURCE_DIR}/build.ts ${CMAKE_SOURCE_DIR} ${CMAKE_CURRENT_BINARY_DIR}
        VERBATIM
        )
