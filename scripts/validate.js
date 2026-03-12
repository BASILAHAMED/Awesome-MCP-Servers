#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'servers.json');

try {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  // Check required structure
  if (!data.servers || !Array.isArray(data.servers)) {
    throw new Error('Missing or invalid "servers" array');
  }
  
  if (!data.categories || !Array.isArray(data.categories)) {
    throw new Error('Missing or invalid "categories" array');
  }
  
  // Validate each server (basic checks only)
  const errors = [];
  const categoryNames = data.categories.map(c => c.name);
  
  data.servers.forEach((server, index) => {
    // Required fields
    const required = ['name', 'github_url', 'description', 'category'];
    required.forEach(field => {
      if (!server[field]) {
        errors.push(`Server ${index + 1}: Missing required field "${field}"`);
      }
    });
    
    // Category exists
    if (server.category && !categoryNames.includes(server.category)) {
      errors.push(`Server ${server.name}: Category "${server.category}" not defined in categories`);
    }
    
    // Stars is a non-negative number (if present)
    if (server.stars !== undefined && (typeof server.stars !== 'number' || server.stars < 0)) {
      errors.push(`Server ${server.name}: Stars must be a non-negative number`);
    }
  });
  
  // Check for duplicate server names
  const names = data.servers.map(s => s.name);
  const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
  if (duplicates.length > 0) {
    errors.push(`Duplicate server names: ${duplicates.join(', ')}`);
  }
  
  // Check categories have required fields
  data.categories.forEach((cat, index) => {
    if (!cat.name || !cat.description || !cat.icon) {
      errors.push(`Category ${index + 1}: Missing required field (name, description, icon)`);
    }
  });
  
  if (errors.length > 0) {
    console.error('❌ Validation failed:');
    errors.forEach(err => console.error(`  - ${err}`));
    process.exit(1);
  }
  
  console.log('✅ Validation passed!');
  console.log(`   ${data.servers.length} servers, ${data.categories.length} categories`);
  process.exit(0);
  
} catch (error) {
  console.error('❌ Error reading or parsing servers.json:', error.message);
  process.exit(1);
}