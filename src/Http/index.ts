import { serve }                    from "https://deno.land/x/std@v0.2.10/http/server.ts";

export class Http {

    private static instance: Http;
    private body: JSON;

    private constructor(req: any) {
        req.body()
            .then( items => {
                var str = "";
                for (var i = 0; i < items.length; i++) {
                    str += String.fromCharCode(parseInt(items[i]));
                }
                this.body = JSON.parse(str)
                console.log('body is: ', this.body);
            })

    }

    static getHttp(req: any) {
        if (!Http.instance) {
            Http.instance = new Http(req);
        }
        return Http.instance;
    }

    public getBody() {
        return this.body;
    }
}