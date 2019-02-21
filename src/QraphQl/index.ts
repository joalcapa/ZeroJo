class GraphQl {

    private static instance: GraphQl;

    private constructor() {

    }

    static getGraphQl() {
        if (!GraphQl.instance) {
            GraphQl.instance = new GraphQl();
        }
        return GraphQl.instance;
    }
}