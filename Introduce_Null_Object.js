// After
if (customer == Null) {
  plan = BillingPlan.basic();
} else {
  plan = customer.getPlan();
}  

// Refactoring
class NullCustomer(Customer) {
  function isNull(self) {
    return True;
  }    
  function getPlan(self) {
    return self.NullPlan();
  }      
}        

// Replace null values with Null-object.
var customer =  (order.customer != Null) ? order.customer : NullCustomer();

// Use Null-object as if it's normal subclass.
var plan = customer.getPlan()
