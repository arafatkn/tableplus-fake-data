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

function generateInt(context) {
  const content = faker.number.int();
  setContent(context, content);
}

function generateBigInt(context) {
  const content = faker.number.bigInt();
  setContent(context, content);
}

function generateDecimal(context) {
  const content = faker.number.float();
  setContent(context, content);
}

function generateWord(context) {
  const content = faker.lorem.word();
  setContent(context, content);
}

function generateLine(context) {
  const content = faker.lorem.lines(1);
  setContent(context, content);
}

function generateSlug(context) {
  const content = faker.lorem.slug(5);
  setContent(context, content);
}

function generateSmallText(context) {
  const content = faker.string.alpha({ length: { min: 100, max: 500 } });
  setContent(context, content);
}

function generateMediumText(context) {
  const content = faker.string.alpha({ length: { min: 1000, max: 5000 } });
  setContent(context, content);
}

function generateLargeText(context) {
  const content = faker.string.alpha({ length: { min: 10000, max: 50000 } });
  setContent(context, content);
}

function generateIPv4(context) {
  const content = faker.internet.ipv4();
  setContent(context, content);
}

function generateIPv6(context) {
  const content = faker.internet.ipv6();
  setContent(context, content);
}

function generateCountry(context) {
  const content = faker.location.country();
  setContent(context, content);
}
function generateCountryCode2(context) {
  const content = faker.location.countryCode('alpha-2');
  setContent(context, content);
}

function generateCountryCode3(context) {
  const content = faker.location.countryCode('alpha-3');
  setContent(context, content);
}

function generateCurrencyCode(context) {
  const content = faker.finance.currencyCode();
  setContent(context, content);
}

function generateUUIDv4(context) {
  const content = faker.string.uuid(); // UUIDv4
  setContent(context, content);
}

function generateULID(context) {
  const content = ulid(Date.now(), () => Math.random());
  setContent(context, content);
}

function generateMongoID(context) {
  const content = faker.database.mongodbObjectId();
  setContent(context, content);
}

// Dates
function generatePastDate(context) {
  const content = faker.date.past();
  setContent(context, content);
}

function generateFutureDate(context) {
  const content = faker.date.future();
  setContent(context, content);
}
