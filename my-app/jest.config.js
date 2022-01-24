module.exports = {
    testPathIgnorePatterns:["/node_modules"],
    transform:{
        '^.*\\.(js|jsx|ts|tsx)$':"<rootDir>/node_modules/babel-jest"
    },
    testEnvironment:'jsdom'
}