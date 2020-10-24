import * as lz4 from "https://deno.land/x/lz4@v0.1.2/mod.ts";
import Module from "./cmake-build-release/@moduleName@_es.js"

async function initWasmModule(): Promise<any> {
    const wasm = lz4.decompress(Uint8Array.from(atob("8BAAYXNtAQAAAAGlgICAAAdgAX8Bf2ABfwBgAAF/YAJ/DgBRAABgA38KAIADf35/AX4CkisA8AUBA2VudgZtZW1vcnkCAYACgAIDlRgA8AgUBAACAAMDAwACAQAAAQEBAgQAAAIEhRsAcAFwAQEBBo8LAPBpAn8BQaCIwAILfwBBnAgLB6eBgIAACxlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQARX193YXNtX2NhbGxfY3RvcnMAAAtieXRlc0xlbmd0aAABCmRheXNJbldlZWsAAgd3ZWxjb21lAAMQX19lcnJub19sb2NhUgDxCQATBmZmbHVzaAARCXN0YWNrU2F2ZQAIDAwAoVJlc3RvcmUACQoPAPAIQWxsb2MACgpfX2RhdGFfZW5kAwEKkIfoAP9BAgALPQEHfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEAchBUEQIQYgAyAGaiEHIAckACAFDwsLAQF/QQchACAADwtYAQlKAAFVQYAIIQRPAFAgBDYCCFYAMAghBQcAoAwhBiAFIAYQBBoOAPArCCEHQRAhCCADIAhqIQkgCSQAIAcPCxAAIAAgABAHaiABEAYaIAALzQEBAX8CQAJAIAEgAHNBA3ENAAwA8BdBA3FFDQADQCAAIAEtAAAiAjoAACACRQ0DIABBAWohACABQQFqIicA8w8NAAsLIAEoAgAiAkF/cyACQf/9+3dqcUGAgYKEeHFEAEACNgIAJQByBCECIABBBEEAXwRqIQEgNQABEUVUAAt6AAJJAEABLQABEwAYAYgAAEcAAjMAMAsLACUAIBAF2wCRmwEBA38gACEB3wASANMAAAoAQC0AAA0oAEAAaw8LIAAhA0BHABAizwAwRQ0BZQCQAEUNAgwACwALHAAjIgKsAADmABADsQAeA7EAIAJAFgBhAXENACACWgCxA0AgAi0AASEDIAJdAEEhAiADpgDwBwEgAGsLBAAjAAsGACAAJAALEgECfyOPAPMCQXBxIgEkACABCwQAQQELAgADAMEKAEGICBANQZAICwcLAGIOC6wBAQK4ARMA1gBgKAJMQX9K2QAgEBLYAEAQCyEBDAAAQgIA1gDyBwAQDCACDwtBACECAkBBACgClAhFDQAJAJAQESECCwJAEA/iAABRADEDQEE5AQJXACEASFcAMAshAecAQAAoAhQFACEcTRYAQRIgAnI+AABnAAARACAMCx4AMDgiAO4AcRAQCyACC2utAAAXAAc6AEBBAEEADgBQJBEFABoJAGAUDQBBfw9KAGAAKAIEIgEHAEAIIgJPLQABBgMhrEEUAGAoEQYAGgtBAKE2AhwgAEIANwMQBwDRAgRBAAsFAEGYCAsLqFgEADMDkAsHSGVsbG8gADsBPwsUAAEAAAA="), c => c.charCodeAt(0)));
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
