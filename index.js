// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function(driver) {
        return driver.name;
    });
}

function exactMatch(drivers, match) {
  const attname = Object.keys(match)[0];
  return drivers.filter(function (driver) {
      return driver[attname] === match[attname];
    });
 }