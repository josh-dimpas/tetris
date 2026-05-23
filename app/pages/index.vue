<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
    <div>
        <div>This is index {{ x }} {{ y }}</div>
        <UButton label="Test" />
    </div>
</template>

<style lang="css" scoped></style>
