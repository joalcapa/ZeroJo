import { serve }                    from "https://deno.land/x/std@v0.2.10/http/server.ts";
import { Http }                     from 'Http/index.ts';

const s = serve("0.0.0.0:8000");

async function main() {
    for await (const req of s) {
        Http.getHttp(req);
        req.respond({ body: new TextEncoder().encode("Hello Jose\n") });
    }
}

main();