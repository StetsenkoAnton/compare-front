<script lang="ts">
  import TheHeader from './components/TheHeader.svelte';
  import CounterCTA from './components/CounterCTA.svelte';
  import { Route, Router } from "svelte-navigator";
  import Home from "./views/Home.svelte";
  import About from "./views/Home.svelte";
  import './styles/main.scss';
</script>

<Router>
  <TheHeader>
    <CounterCTA />
  </TheHeader>
  <main>
<!--    <Route component={Home} />-->
    <Route component={About} />
  </main>
</Router>


