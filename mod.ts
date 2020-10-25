import * as brotli from "https://deno.land/x/brotli@v0.1.4/mod.ts";
import Module from "./cmake-build-release/@moduleName@_es.js"

async function initWasmModule(): Promise<any> {
    const wasm = brotli.decompress(Uint8Array.from(atob("G1oKAIzUSE1zO//Jpvn+nwVJI1jZvgD+1SlhaW0dkSZANIJbm1cWHOAqxNxSnTpliuqKKmTVpnfUpTXXHUKBZHAMxqJ4BV3j0C7OxmdyNW36Lv+UbvSj1EsH+/0uF+Y3oW1ovWm6ZVAIx0ypTUksxjOeh7R1nKgfyQoGKz6s56I9XCEC6MPxeAy/RSmlLUrRAqUtTj+rgZZKQ11UejSlo/xc9hak4mSvZ4guzGMes3ox7aZTDhhKKTABRMQOwM6DxZqsEpP3dPDmnJJ55/1F0inMG9D+x/eOx9AnWntxkPpB3B3ZSy5IW/HvISpbu689XLHd9vKy7Y56gyFIdw6M4uFVcTI3mgfnlO59eXJrHC9B8nX+aciBtfFgkPTsfz10QOTNzi7vGcIJQXY4aneXbmzvjYH8q7zhkkbVgxhG7nkHs7zc68LMWXuJn642TnYrzv30sK5VDH25b7IBX/8NaxGSCSoWEl4KlagqRAk2si3qbM6HjjiBH7omqDxR4i2GvvhViFvSmig1fgVBSc9nOY+Ee70ZI3REpABtZEjKyYSuwB6euOIFzkkJn+aboMqIksximJVsFeKXdACBIPAXhQLvJIH+gwmO4SY3hQRDo9YCwtsYtV5cgGoKtsvUgApvBYQvLiiBIRFuVWRIVLK+sQCthc5mVNiku7D5//+7F/tm/Nz3wP4+nyLeyPTW0glZYJyPTR0RkhSUF/MdSnqgQpwmUV2AlbcYaq0jUeCql/M2KWsy8aipQzUIFdeAgj1oqWTlWaCaatkXF0h+l4sLnIeGTk+vcJ1BW66mURVHbqY047UAYe47qaZwDRQq4eeSkEUZraFgSStYCz09CKrQU9zudxIsmdV+haoQ0g4MWYxvO+ZgHkFQMM9A+8Hiov6KinoV9D01OZuvMukIGExgUaBDCkNvAu1uiSAvXNIGFXPToOYXMhcXEOgalEPW3AxKmgJTWzWNAb2sYzGk7rqOFlOEdcrVAm3hAQcQBZGY1zlocwVatw4CLaxXqjxU+WyDHpqfzdWyi5PSawswqSeInAqRxZkKX9tsMCbML/r4JmeXPZykmezQcCq4AK3yyZ1ZMbBcmFeg9SczEAwg0v5ljgoKTLiknsKXX3r/vvEYTtJeienL8Tw0iXAio6HwJo42HA267ZELa4ej1e7qAS+WVg/49LrlOMnMRJOzODGHpE07icmli561ydvW7klirIKXmlFESvKSaW1vdtkK7LB3V+XZr2QisDbkS1w83j05V+7qKgSa9mxCdmWtbVmd9hNGZhHJq07Tbs/gM4fLukuyg11IZns/E+DYER2icvN42a4T/7RxmN1dXJ6x6hjJb69dNcLum1Ct+Nn8lTHyRzbsWlcNwD8m49vr0kUudxbfCTDmufCdbqUPeKnK5Wcz14EMeCZ5EVW4jv8pADNfRbJLyCM/TMBX/UQVFPKswGJYV3YNVIbdAZIn/d5bFj54b7lBj7zzcArojOKkq4rB8ScXy3Tz8dtbuE5lmvCaJ6jiVr1Nn3Xi5ZPdiYBywdFbXT5JcOrI6T25u+uP8apQxZ1aa8AvIdbMnEmuB966rz1clheSuMjs1iZE9LfrgGfd3wGg6OZhPBhGHqG0Dler6MKrFnqJr1c6jOKV2yKjOKn1f1FzidNBbgfWu4zAxmCkpsohuFwPFZE7mXtmG8jNeye+TbgIxkQQgElRZUG/paTmpt2Rid/Ji44nNa2/ECHyyF433bKYyPfUpwdPkvaNJ6h+5y7+spMzB0MS3EIlrtPNZKZRn65Py9lRb3UUDaN90cIgcgBrormFUXSTTCULe1bqzm6zYW/PoBtfCNSouVbNa3MLo/k9nfjc5eW9hKq5cX/50tjQ3rx580xnU2N9uzO7qbFhpr2lsWlzvKnRaKxvz26KNze6nS3dxjlooQkRjgMP0XUuZc1DlTUrbaittLvwt9bPyQhnP1RN8+0BZswqLKMBAA=="), c => c.charCodeAt(0)));
    return await Module({"wasmBinary": wasm});
}

const instance = await initWasmModule();

//======== Typescript stubs ==========
const welcomeWrap: any = instance.cwrap('welcome', 'string', ['string']);
const bytesLengthWrap: any = instance.cwrap('bytesLength', "number", ['string']);

export function welcome(name: string): string {
    return welcomeWrap(name);
}

export function bytesLength(name: string): number {
    return bytesLengthWrap(name);
}
