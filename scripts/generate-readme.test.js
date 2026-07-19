const test = require('node:test');
const assert = require('node:assert/strict');

const { selectRecentlyUpdated } = require('./generate-readme');

test('selectRecentlyUpdated returns the latest production-ready servers deterministically', () => {
  const servers = [
    { name: 'Zulu', last_updated: '2025-01-02', production_ready: true },
    { name: 'Alpha', last_updated: '2025-01-02', production_ready: true },
    { name: 'Older', last_updated: '2025-01-01', production_ready: true },
    { name: 'Newest draft', last_updated: '2025-01-03', production_ready: false },
    { name: 'Oldest', last_updated: '2024-12-31', production_ready: true }
  ];
  const originalOrder = servers.map(server => server.name);

  const firstSelection = selectRecentlyUpdated(servers).map(server => server.name);
  const secondSelection = selectRecentlyUpdated(servers).map(server => server.name);

  assert.deepEqual(firstSelection, ['Alpha', 'Zulu', 'Older']);
  assert.deepEqual(secondSelection, firstSelection);
  assert.deepEqual(servers.map(server => server.name), originalOrder);
});
