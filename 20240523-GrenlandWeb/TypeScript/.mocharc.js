module.exports = {
    require: ['ts-node/register', __dirname+'/mocha-setup.js'],
    diff: true,
    "node-option": [
        "experimental-specifier-resolution=node",
        "loader=ts-node/esm"
    ],
    extensions: ['ts', 'tsx'],
    spec: ['**/for_*/**/*.ts'],
    ignore: ['**/node_modules/**/*', '**/*.d.ts'],
}
