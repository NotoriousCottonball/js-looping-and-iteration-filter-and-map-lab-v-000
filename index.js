// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let names = []
  drivers.filter(function(driver) {
    if (driver.revenue > revenue) {
      names.push(driver.name);
    }
  })
  return names;
}

