/**
 * Add some numbers together 👀
 */
export default (...args) => {
    return args.reduce((sum, num) => sum + num, 0)
}