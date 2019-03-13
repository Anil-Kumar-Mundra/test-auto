
const utilComponent = function () { };
(function() {
    this.compare = function(arr1,arr2) {  
        if(!arr1  || !arr2) return
        let result;
        arr1.forEach((e1 )=> arr2.forEach(e2 => {
            if (e1.length > 1 && e2.length) {
                result = compare(e1,e2);
            } else if(e1 !== e2 ) {
                result = false
            } else {
                result = true
            }
        }));
        return result       
    },
    this.runTest = async function (testName, suiteName) {
        await describe(testName, async function () {            
            await require(`../test/${suiteName}/${testName}`);
        });
    }
}).call(utilComponent.prototype) //creating a prototype object && properties for BasePage object

export{ utilComponent }