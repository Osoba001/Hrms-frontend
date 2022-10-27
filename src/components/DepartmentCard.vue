<template>
  <article class="department">
    <header>
      <h3>DEPARTMENT</h3>
      <p>{{ department.name }}</p>
    </header>

    <div class="about-department-wrapper">
      <div class="about-department-inner">
        <h3>About</h3>
        <div class="department-info">
          <p class="description">
            {{ department.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="department-manager">
      <!-- <h3>Manager</h3> -->
      <p>{{ department.hod }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "DepartmentCard",
  props: ["department"],
};
</script>

<style scoped>
.department {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 0.7rem;
  padding-top: 1.5rem;
  min-height: 230px;
  border-radius: 6px;
  box-shadow: 4px 4px 5px 4px rgba(182, 182, 182, 0.219);
  border-top: 2.5px solid orange;
}

header h3 {
  font-size: 0.75rem;
  font-weight: 700;
  color: #28282870;
  margin-bottom: 3px;
}

header p {
  font-size: 1rem;
  font-weight: 700;
}

.about-department-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
}

.about-department-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.about-department-wrapper h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #28282870;
  margin-bottom: 3px;
}

.department-info {
  background-color: rgba(238, 238, 238, 0.747);
  flex: 1;
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0.7rem;
}

.department-manager h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #28282870;
}

.department-manager p {
  font-size: 0.875rem;
  margin-bottom: 3px;
}

.description {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
