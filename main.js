const obj = {
    test: function() {
        console.log(this) // *1
        function test() {
            console.log(this) // *2
        }
        test.call(this)
    }
}
obj.test()