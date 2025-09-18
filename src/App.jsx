import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Default Amplify UI styling

import config from '../amplify_outputs.json'; // Your Amplify configuration file
import './App.css'; // Your application-specific styling

Amplify.configure(config);
const client = generateClient();

function App() {
  // Your application's main content and logic would go here
  // For example, displaying notes, handling note creation/deletion, etc.

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Welcome, {user.username}!</h1>
            <button onClick={signOut}>Sign Out</button>
          </header>
          {/* Your notes application content */}
          <main>
            {/* Example: Displaying notes */}
            <h2>My Notes</h2>
            {/* ... other components for notes management ... */}
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default App;