<script lang="ts">
  interface IUser {
    username: string;
    age: number;
    isVerified: boolean;
  }

  let userForm: IUser = {
    username: '',
    age: 0,
    isVerified: false,
  };

  let userArray: IUser[] = [];

  const submitHandler = () => {
    if (userForm.username && userForm.age) {
      userArray = [...userArray, { ...userForm }];
      userForm = { username: '', age: 0, isVerified: false }; // reset form
    }
  };

  const removeUser = (username: string) => {
    userArray = userArray.filter(user => user.username !== username);
  };

  const getUserClass = (age: number) => {
    if (age < 10) return 'green';
    if (age < 20) return 'yellow';
    return 'red';
  };
</script>

<div class="container">
  <input bind:value={userForm.username} type="text" placeholder="Username" />
  <input bind:value={userForm.age} type="number" placeholder="Age" />
  <button on:click={submitHandler}>Add User</button>

  {#each userArray as user (user.username)}
    <div class="containersmall {getUserClass(user.age)} {getUserClass(user.age) + 'border'}">
      <p class="text">{user.username}</p>
      <p class="text">{user.age} yo</p>
      <button on:click={() => removeUser(user.username)}>Remove</button>
    </div>
  {/each}
</div>

<style>
  .container {
    background-color: hsl(0, 80%, 5%);
    padding: 20px;
    border: 2px solid hsl(0, 80%, 40%);
    justify-content: space-between;
  }

  .containersmall {
    padding: 10px;
    margin-top: 10px;
  }

  .green {
    background-color: hsl(150, 60%, 15%);
    color: hsl(150, 80%, 80%);
  }

  .yellow {
    background-color: hsl(75, 60%, 15%);
    color: hsl(75, 80%, 80%);
  }

  .red {
    background-color: hsl(0, 60%, 15%);
    color: hsl(0, 80%, 80%);
  }

  .greenborder {
    border: 2px solid hsl(150, 80%, 40%);
  }

  .yellowborder {
    border: 2px solid hsl(75, 80%, 40%);
  }

  .redborder {
    border: 2px solid hsl(0, 80%, 40%);
  }

  .text {
    font-family: 'Helvetica';
    margin: 0;
  }
</style>
