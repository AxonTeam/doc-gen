<a name="Test"></a>

## Test
**Kind**: global class  
**Author**: KhaaZ  
**Properties**

| Name | Type |
| --- | --- |
| client | <code>Object</code> | 


* [Test](#Test)
    * [new Test()](#new_Test_new)
    * _instance_
        * [.client](#Test+client)
        * [.getClient()](#Test+getClient) ⇒ <code>Object</code>
        * [.setClient([client])](#Test+setClient)
        * [.promisify(func, ...args)](#Test+promisify) ⇒ <code>Promise</code>
    * _static_
        * [.Test](#Test.Test)
            * [new Test(client)](#new_Test.Test_new)

<a name="new_Test_new"></a>

### new Test()
Test class.

<a name="Test+client"></a>

### test.client
Getter

**Kind**: instance property of [<code>Test</code>](#Test)  
**Read only**: true  
<a name="Test+getClient"></a>

### test.getClient() ⇒ <code>Object</code>
Get clent

**Kind**: instance method of [<code>Test</code>](#Test)  
<a name="Test+setClient"></a>

### test.setClient([client])
Set client.

**Kind**: instance method of [<code>Test</code>](#Test)  

| Param | Type | Default |
| --- | --- | --- |
| [client] | <code>Object</code> | <code></code> | 

<a name="Test+promisify"></a>

### test.promisify(func, ...args) ⇒ <code>Promise</code>
Promisify a function

**Kind**: instance method of [<code>Test</code>](#Test)  

| Param | Type |
| --- | --- |
| func | <code>function</code> | 
| ...args | <code>\*</code> | 

<a name="Test.Test"></a>

### Test.Test
**Kind**: static class of [<code>Test</code>](#Test)  
<a name="new_Test.Test_new"></a>

#### new Test(client)
Creates an instance of Test.


| Param | Type |
| --- | --- |
| client | <code>Object</code> | 

