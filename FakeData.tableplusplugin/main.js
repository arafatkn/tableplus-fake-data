import { faker } from '@faker-js/faker';
import { ulid } from 'ulidx';

const setContent = function (context, content) {
  // Get all the items
  const row = context.clickedRow();
  const col = context.clickedColumn();
  const item = context.currentItem();

  if (row == null || col == null || item == null) {
    context.alert('Error', 'No item cliked');
    return;
  }

  if (content == null) {
    context.alert('Error', 'Could not generate!');
    return;
  }

  // Make sure the constant is nil
  row.setConstant(col.name, '');

  // Update row value
  row.update(col.name, content);

  // Add to update queue
  item.addUpdate(row);

  // Notify the change
  context.update();
};

global.generateInt = function (context) {
  const content = faker.number.int();
  setContent(context, content);
}

global.generateBigInt = function (context) {
  const content = faker.number.bigInt();
  setContent(context, content);
}

global.generateDecimal = function (context) {
  const content = faker.number.float();
  setContent(context, content);
}

global.generateWord = function (context) {
  const content = faker.lorem.word();
  setContent(context, content);
}

global.generateLine = function (context) {
  const content = faker.lorem.lines(1);
  setContent(context, content);
}

global.generateSlug = function (context) {
  const content = faker.lorem.slug(5);
  setContent(context, content);
}

global.generateSmallText = function (context) {
  const content = faker.string.alpha({ length: { min: 100, max: 500 } });
  setContent(context, content);
}

global.generateMediumText = function (context) {
  const content = faker.string.alpha({ length: { min: 1000, max: 5000 } });
  setContent(context, content);
}

global.generateLargeText = function (context) {
  const content = faker.string.alpha({ length: { min: 10000, max: 50000 } });
  setContent(context, content);
}

global.generateIPv4 = function (context) {
  const content = faker.internet.ipv4();
  setContent(context, content);
}

global.generateIPv6 = function (context) {
  const content = faker.internet.ipv6();
  setContent(context, content);
}

global.generateCountry = function (context) {
  const content = faker.location.country();
  setContent(context, content);
}
global.generateCountryCode2 = function (context) {
  const content = faker.location.countryCode('alpha-2');
  setContent(context, content);
}

global.generateCountryCode3 = function (context) {
  const content = faker.location.countryCode('alpha-3');
  setContent(context, content);
}

global.generateCurrencyCode = function (context) {
  const content = faker.finance.currencyCode();
  setContent(context, content);
}

global.generateUUIDv4 = function (context) {
  const content = faker.string.uuid(); // UUIDv4
  setContent(context, content);
}

global.generateULID = function (context) {
  const content = ulid(Date.now(), () => Math.random());
  setContent(context, content);
}

global.generateMongoID = function (context) {
  const content = faker.database.mongodbObjectId();
  setContent(context, content);
}

// Dates
global.generatePastDate = function (context) {
  const content = faker.date.past();
  setContent(context, content);
}

global.generateFutureDate = function (context) {
  const content = faker.date.future();
  setContent(context, content);
}
