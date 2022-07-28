<template>
  <div class="bio-container tab-container">
    <form>
      <section>
        <h2>Personal details</h2>

        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <TextInput label="Surname" placeholder="Enter your surname" />
            </div>
            <div class="input">
              <TextInput
                label="First name"
                placeholder="Enter your first name"
              />
            </div>
            <div class="input">
              <TextInput
                label="Email address"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="input">
              <TextInput
                label="Phone number"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="input">
              <TextInput
                label="Contact address"
                placeholder="Enter your contact address"
              />
            </div>
          </div>

          <div class="inputs-container">
            <div class="input">
              <TextInput label="State of origin" />
            </div>
            <div class="input">
              <TextInput label="Date of Birth" type="date" />
            </div>
            <div class="input">
              <TextInput label="Date of hire" type="date" />
            </div>
            <div class="input">
              <TextInput label="Gender" />
            </div>
            <div class="input">
              <TextInput label="Marital status" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Next of Kin details</h2>

        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <TextInput label="Surname" placeholder="Enter your surname" />
            </div>
            <div class="input">
              <TextInput
                label="First name"
                placeholder="Enter your first name"
              />
            </div>
            <div class="input">
              <TextInput
                label="Phone number"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="Email address"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="input">
              <TextInput
                label="Contact address"
                placeholder="Enter your contact address"
              />
            </div>

            <div class="input">
              <TextInput label="Relationship" type="text" />
            </div>
          </div>
        </div>
      </section>

      <button class="next-btn">Next</button>
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Bio',
  components: { TextInput },
}
</script>

<style scoped>
.bio-container {
  width: 100%;
}
section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
section h2 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #ca1310;
}
form {
  display: flex;
  flex-direction: column;
}
section > div {
  display: flex;
  gap: 2rem;
}
.inputs-container {
  flex: 0.5;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.input {
  flex: 1;
}

.next-btn {
  padding: 0.7em 1.5em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
  margin-bottom: 1.5rem;
}

.next-btn:hover {
  background-color: #255eb4;
}

@media (max-width: 850px) {
  section > div {
    flex-direction: column;
    gap: 1rem;
  }
  .inputs-container {
    max-width: 100%;
  }
}
</style>
